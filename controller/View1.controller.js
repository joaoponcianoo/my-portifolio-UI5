sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "myportifolioapp/model/models",

    //sap/m
    "sap/m/GenericTile",
    "sap/m/TileContent",
    "sap/m/Text",

    //sap/ui
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (
        Controller,
        models,
        GenericTile,
        TileContent,
        Text,
        Fragment
    ) {
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
                    let sText = new Text({ text: item.description });

                    let oTileContent = new TileContent();
                    oTileContent.setContent(sText);

                    let oGenericTile = new GenericTile({
                        header: item.header,
                        url: item.url,
                        press: ""
                    });

                    oGenericTile.addStyleClass(item.class);
                    oGenericTile.addTileContent(oTileContent);

                    oContent.addItem(oGenericTile);
                });
            },

            onAvatarPress: function (oEvent) {
                const oButton = oEvent.getSource();
                const oView = this.getView();

                if (!this._oPopover) {
                    this._oPopover = Fragment.load({
                        id: oView.getId(),
                        name: "myportifolioapp.view.fragments.popover",
                        controller: this
                    }).then((oPopover) => {
                        oView.addDependent(oPopover);
                        return oPopover;
                    })
                }

                this._oPopover.then((oPopover) => {
                    oPopover.openBy(oButton);
                })
            }
        });
    });
