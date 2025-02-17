var krpanoplugin = function()
{	
	var local = this;
	var krpano = null;
	var plugin = null;
	
	var slaid = null;



	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
	{
		krpano = krpanointerface;
		plugin = pluginobject;
		slaid = document.createElement("input");
		slaid.type = "range";  
        slaid.min = -10;
        slaid.max = 10;
        slaid.value = 0;

        slaid.style.borderRadius="50%";

        var label = document.createElement("div");
        label.innerHTML = "0";  // Borne à 0
        label.style.position = "absolute";
        label.style.left = "50%";  // Centrer sur la barre
        label.style.top = "20px";  // Positionner juste au-dessus de la barre
        label.style.transform = "translateX(-50%)";  // Centrer exactement
        plugin.sprite.appendChild(label);

		plugin.sprite.appendChild(slaid);

        slaid.addEventListener('input',function(){
            var value = parseFloat(slaid.value);
            krpano.set("slider_value",value);
        })
		
	} 
 
};