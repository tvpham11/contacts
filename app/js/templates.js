this["template"] = this["template"] || {};
this["template"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"contact\" id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n  <i class=\"fa fa-user\"></i>"
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + " <br />\n  <i class=\"fa fa-birthday-cake\"></i>"
    + alias3(((helper = (helper = helpers.dob || (depth0 != null ? depth0.dob : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dob","hash":{},"data":data}) : helper)))
    + " <br />\n  <i class=\"fa fa-phone\"></i>"
    + alias3(((helper = (helper = helpers.phoneNo || (depth0 != null ? depth0.phoneNo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNo","hash":{},"data":data}) : helper)))
    + " <br />\n  <i class=\"fa fa-envelope-o\"></i><a href=\"mailto: "
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a> <br />\n  <i class=\"fa fa-twitter\"></i><a href=\"twitter.com/"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "</a> <br />\n  <i class=\"fa fa-linkedin\"></i><a href=\""
    + alias3(((helper = (helper = helpers.linkedIn || (depth0 != null ? depth0.linkedIn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkedIn","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias3(((helper = (helper = helpers.linkedIn || (depth0 != null ? depth0.linkedIn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkedIn","hash":{},"data":data}) : helper)))
    + "</a> <br />\n  "
    + alias3(((helper = (helper = helpers.contactCat || (depth0 != null ? depth0.contactCat : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contactCat","hash":{},"data":data}) : helper)))
    + " <br />\n  <span><i class=\"fa fa-minus-square-o\"></i></span>\n</li>\n";
},"useData":true});