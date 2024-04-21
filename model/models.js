sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },

            createAppList: function() {
                const oAppList = [
                    {
                        header: "App01",
                        description: "App01 Description",
                        class: "sapUiSmallMargin"
                    },
                    {
                        header: "App02",
                        description: "App02 Description",
                        class: "sapUiSmallMargin"
                    },
                    {
                        header: "App03",
                        description: "App03 Description",
                        class: "sapUiSmallMargin"
                    },
                    {
                        header: "App04",
                        description: "App04 Description",
                        class: "sapUiSmallMargin"
                    }
                ];
                return oAppList;
            }
        };
    });