sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(e,s){"use strict";return e.extend("chobanii.controller.View1",{onInit:function(){},onLoginPress1:function(){var e=this.getView().byId("user").getValue();var s=this.getView().byId("password").getValue();if(e==="Admin"&&s==="Admin"){sap.m.MessageToast.show("Login Successfully");var o=sap.ui.core.UIComponent.getRouterFor(this);o.navTo("uploadPage",{},true)}else{alert("Re-Enter your Detail")}this.byId("user").setValue("");this.byId("password").setValue("")},onLoginPress:function(){var e=this.getView().byId("user").getValue();var s=this.getView().byId("password").getValue();var o={user:e,password:s};fetch("https://port4040-workspaces-ws-v479k.us10.trial.applicationstudio.cloud.sap/my/userLogin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{console.log("Response from login API:",e);const s=JSON.parse(e.response);console.log(s.status);if(s.status==200){sap.m.MessageToast.show("Login Successfully");var o=sap.ui.core.UIComponent.getRouterFor(this);o.navTo("uploadPage",{},true)}if(s.status==400){sap.m.MessageToast.show("Server Not Responding");var o=sap.ui.core.UIComponent.getRouterFor(this);o.navTo("RouteView1",{},true)}}).catch(e=>{console.error("Failed to login:",e)});this.byId("user").setValue("");this.byId("password").setValue("")}})});