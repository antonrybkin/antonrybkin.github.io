const serviceList = [
  {
    title: 'Site',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 800
  },
  {
    title: 'Mobile App',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 1500
  },
  {
    title: 'Block chain',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 17000
  },
  {
    title: 'Replace wool',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 100
  },
  {
    title: 'Site',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 800
  },
  {
    title: 'Mobile App',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 1500
  },
  {
    title: 'Block chain',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 1700
  },
  {
    title: 'Replace wool',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 100
  },
  {
    title: 'Site',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 800
  },
  {
    title: 'Replace wool',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 100
  },
  {
    title: 'HL System',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 17000
  },
  {
    title: 'Mobile App',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 800
  },
  {
    title: 'Block chain',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 17000
  },
  {
    title: 'Automation',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 800
  },
  {
    title: 'Site',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 800
  },
  {
    title: 'Mobile App',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
    priceFrom: 1500
  }
]

var services = []

while (serviceList.length > 0) {
  services.push(serviceList.splice(0, 4))
}

export default services
