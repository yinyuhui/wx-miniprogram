Page({
    data: {
        percent1: 60,
        percent2: 0,
        percent3: 100,
    },

    finish() {
        //
        //
        this.setData({ percent1: 100 })
    },

    resetPercent() {
        this.setData({ percent1: 60 })
    },

    download() {
        setInterval(() => {
            const { percent2 } = this.data
            const value = percent2 < 100 ? percent2 + 10 : 100
            this.setData({ percent2: value })
        }, 100)
    },

    reload() {
        // 比较推荐的写法
        this.setData({ percent3: 0 })
        this.setData({ percent3: 100 })

        // nextTick
        // this.setData({ percent3: 0 })
        // wx.nextTick(()=>{
        //     this.setData({ percent3: 100 })
        // })

        // setTimeout
        // this.setData({ percent3: 0 })
        // setTimeout(()=>{
        //     this.setData({ percent3: 100 })
        // }, 17)
    },
})

