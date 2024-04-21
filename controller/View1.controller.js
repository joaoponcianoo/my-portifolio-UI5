sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "myportifolioapp/model/models",

    //sap/m
    "sap/m/GenericTile",
    "sap/m/TileContent",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models, GenericTile, TileContent, Text) {
        "use strict";

        return Controller.extend("myportifolioapp.controller.View1", {
            onInit: function () {
                this._insertTiles();
            },

            onChangeTheme: function (oEvent) {
                const sIcon = oEvent.getSource().getIcon();

                sap.ui.getCore().getConfiguration().setTheme(sIcon.includes("dark") ? "sap_horizon_dark" : "sap_horizon");
                oEvent.getSource().setIcon(sIcon.includes("dark") ? "sap-icon://light-mode" : "sap-icon://dark-mode")
            },

            _insertTiles: function () {
                const oAppList = models.createAppList();
                const oContent = this.byId("idHBoxMainContent");

                oAppList.forEach(item => {
                    let sText = new Text({text: item.description});

                    let oTileContent = new TileContent();
                    oTileContent.setContent(sText);

                    let oGenericTile = new GenericTile({
                        header: item.header
                    });

                    oGenericTile.addStyleClass(item.class);
                    oGenericTile.addTileContent(oTileContent);

                    oContent.addItem(oGenericTile);
                });
            }
        });
    });
