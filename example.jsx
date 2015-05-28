var React = require('react')
var Tabs = require('../index')
var TabPane = Tabs.TabPane

//弹幕的内容
var data = [
    {
        "title": "青春",
        "content": "1【青春】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。",
        "active": true
    },
    {
        "title": "彩虹",
        "content": "2【青春】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。",
        "active": false
    },
    {
        "title": "歌唱",
        "content": "3【青春】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。",
        "active": false
    }
]

var Example = React.createClass({
    render: function () {
        return (
            <Tabs defaultActiveIndex={1}>
                <TabPane tab={'数据'}>数据</TabPane>
                <TabPane tab={'概述'}>概述</TabPane>
                <TabPane tab={'评论'}>评论</TabPane>
            </Tabs>
        )
    }
})

module.exports = Example