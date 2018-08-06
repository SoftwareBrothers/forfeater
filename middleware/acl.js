var acl = function acl(rules) {
    return function(req, res, next) {
        var path = req.url;
        var method = req.method;
        var user_role = 'guest';
        if (req.user_details) {
            user_role = req.user_details.role;
        }

        if (null == rules[user_role]) {
            next();
            return;
        }

        if (rules[user_role].allowed) {
            if (verifyAllowed(rules[user_role].allowed, path, method)) {
                next();
                return;
            }
        }

        if (rules[user_role].denied) {
            if (verifyDenied(rules[user_role].denied, path, method)) {
                res.status(401).json({
                    code: 401,
                    error: 'Unauthorized'
                });
                return;
            }
        }
        next();
    }
};

function verifyAllowed(rules, path, method)
{
    let allowed = null;
    rules.forEach(function(rule){
        if ((rule.method === method || '*' === rule.method) && (rule.route === path || '*' === rule.route)) {
            allowed = true;
        }
    });
    return allowed;
}

function verifyDenied(rules, path, method)
{
    let denied = null;
    for (let rule of rules) {
        if ((rule.method === method || '*' === rule.method) && (rule.route === path || '*' === rule.route)) {
            denied = true;
            break;
        }
    }
    return denied;
}
module.exports = acl;
