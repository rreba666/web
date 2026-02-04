let email = ['5345356@qq.com',
    'fdsffdsfs_tgfg@163.com',
    'gsfgdS44g@163.cn',
    '3566563565@163.com',
    'gabcdf545gfg@yoo.com.cn']

let rag = /\w+@\w+(\.com)?(\.cn$)?/g

for (const item of email) {
    console.log(item.match(rag));

}
