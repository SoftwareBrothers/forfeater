const db = require('../models');

const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
AdminBro.registerAdapter(require('admin-bro-sequelizejs'));

const Dashboard = require('./pages/dashboard');

const foodManagement = {
  icon: 'fas fa-utensils',
  name: 'Food Management'
};

module.exports.init = async (app) => {
  const settings = {
    rootPath: '/admin',
    branding: { companyName: 'Forfeater admin' },
    databases: [db],
    dashboard: Dashboard,
    resources: [{
      resource: db.vendor,
      options: {
        parent: foodManagement,
        listProperties: ['name', 'url']
      }
    }, {
      resource: db.product,
      options: {
        parent: foodManagement,
        properties: {
          id: {isVisible: false},
          active: {
            render: {
              list: (property, record) => {
                if(record.param('active')) {
                  return '<i class="far fa-eye"></i>'
                } else {
                  return '<i class="far fa-eye-slash"></i>'
                }
              }
            }
          }
        }
      }
    }]
  };

  const adminBro = new AdminBro(settings);
  const router = AdminBroExpressjs.buildRouter(adminBro);
  app.use('/admin', router);
}