// TODO: 型定義を追加する

module.exports = {
  'bundlerType': 'standard', // 'standard', 'vue', 'react'
  'dts-gen': {
    env: 'development',
  },
  'environments': [
    // TODO: dts-gen, ginue, プログラム内で全て共通化
    {
      name: 'development',
      host: 'the-red.cybozu.com',
      app: {
        'project': 148,
        'customer': 149,
        'sales-activity': 150,
      },
    },
    {
      name: 'staging',
      host: 'the-red.cybozu.com',
      app: {
        'project': 169,
        'customer': 170,
        'sales-activity': 171,
      },
      guest: 34,
    },
    {
      name: 'production',
      host: 'the-red.cybozu.com',
      app: {
        'project': 175,
        'customer': 176,
        'sales-activity': 177,
      },
    },
  ],

  // TODO: import時のrootをどこに置くか？特に何もしなくて良いか？
}
