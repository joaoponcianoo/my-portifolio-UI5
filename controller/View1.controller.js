sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myportifolioapp.controller.View1", {
            onInit: function () {

            },

            onChangeTheme: function(oEvent) {   
                const sIcon = oEvent.getSource().getIcon();

                sap.ui.getCore().getConfiguration().setTheme(sIcon.includes("dark") ? "sap_horizon_dark" : "sap_horizon" );
                oEvent.getSource().setIcon(sIcon.includes("dark") ? "sap-icon://light-mode" : "sap-icon://dark-mode")
            }
        });
    });
