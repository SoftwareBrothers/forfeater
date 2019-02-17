const db = require('../../models')
const AdminBro = require('admin-bro')

class Dashboard extends AdminBro.PageBuilder {
  async build(){
    this.title = 'Forfeater'
    this.subtitle = 'The admin panel for the best food management tool ever'
    this.addBlock({
      title: 'Active Users',
      value: await db.user.count({ active: 1 }),
      icon: 'fas fa-user fa-2x',
      columns: 3,
    })
    this.addBlock({
      title: 'Active Orders',
      value: await db.order.count(),
      icon: 'fab fa-jedi-order fa-2x',
      columns: 3,
    })

    this.addChart({
      columns: 12,
      title: 'Some amazing graph',
      subtitle: 'Number of orders by country',
      config: {
        type: 'line',
        data: {
          labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets: [{
              data: [86,114,106,106,107,111,133,221,783,2478],
              label: "Copenhagen :)",
              borderColor: AdminBro.PageBuilder.COLOR.INFO,
              fill: false
            }
          ]
        }
      }
    })
  }
}

module.exports = Dashboard
