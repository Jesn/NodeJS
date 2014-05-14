/**
 * Created by Administrator on 2014/5/14.
 */

//直接调用包
var somePackage=require('./FirstPackage/lib');
//在包中的package.json中配置main，然后就可以直接调用文件夹的名称来调用包了
var somePackage2=require('./FirstPackage');
somePackage.hello();
somePackage2.hello();