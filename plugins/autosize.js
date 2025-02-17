var krpanoplugin = function(){
    var local = this;
    var krpano = null;
    var plugin = null;

    local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
    {
        krpano = krpanointerface;
        plugin = pluginobject;
        console.log("bonjour ");
        krpano.trace("bonjour");
        // var caller_id = plugin.sprite ? plugin.sprite.id : null;
        // if(!caller_id)
        // {
        //     console.log("Plugin.sprite.id null");
        //     return;
        // }
        // else
        // {
        //     var caller_id = plugin.sprite.id;
        //     var skin_url = krpano.get("layer["+caller_id+"].url");
        //     skin_url = caller_id.split("/");
        //     var skin = skin_url.at(-1);
        //     var autosize_bool = krpano.get("Autosize");
        //     var skin_without_rotate = ["vtourskin_mapspot"];
        // }
    }
    
}