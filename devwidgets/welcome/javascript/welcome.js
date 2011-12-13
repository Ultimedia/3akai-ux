/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

// load the master sakai object to access all Sakai OAE API methods
require(["jquery", "sakai/sakai.api.core"], function($, sakai) {

    var $welcomeWidget = $(".welcome_widget");
    var $welcomeWidgetGalleryImage;
    var $welcomeWidgetNextButton;
    var $welcomeWidgetCaption;
    var $addContentButton;
    
    var welcomeTemplate = "welcome_template";
    var welcomeWidgetData = {};        
        welcomeWidgetData.config = {};
        
        // timer for the gallery (milisec)
        welcomeWidgetData.config.galleryTimer = 3000;

    var renderWidget = function(){
        $welcomeWidget.html(sakai.api.Util.TemplateRenderer(welcomeTemplate, {
            "anon": sakai.data.me.user.anon || false,
            "system": sakai.api.i18n.getValueForKey("SAKAI")
        }));
        
        // Jquery select the main elements
        $welcomeWidgetGalleryImage = $('#welcomeWidgetImage');
        $welcomeWidgetGalleryLink = $('#welcomeWidgetLink');

        $welcomeWidgetNextButton = $('#welcome_widget_next_button');
        $welcomeWidgetCaption = $('#welcome_widget_image_caption');
        
        $addContentButton = $('#addContentLink');
        $addContentButton.click(function(){
            $(window).trigger("init.newaddcontent.sakai");
            return false;
        });
    
        initGallery();
    };
    
    /**
     * Load the JSON and set up the gallery
     */
    var initGallery = function(){
        $welcomeWidgetNextButton.click(function(){
            // show the next image
            nextImage();
        });
        
        $.getJSON('devwidgets/welcome/gallery/gallery.json', function(data) {
            welcomeWidgetData.gallery = data.images;
            welcomeWidgetData.galleryIndex = 0;
            loadImage();
        });    

    };

    /**
     * Load an image
     */
    var loadImage = function(){
        var imageObject = welcomeWidgetData.gallery[welcomeWidgetData.galleryIndex];

        $welcomeWidgetGalleryLink.attr('href', imageObject.link);
        $welcomeWidgetCaption.html('<a href="' + imageObject.link + '">' + imageObject.caption + '</a>');
        $welcomeWidgetGalleryImage.attr('src', imageObject.url).fadeIn(1000).delay(welcomeWidgetData.config.galleryTimer).fadeOut(400, function(){
            nextImage();
        });
    };
    
    /**
     * Prepare the next image
     */
    var nextImage = function(){
        if(welcomeWidgetData.galleryIndex === (welcomeWidgetData.gallery.length-1)){
            welcomeWidgetData.galleryIndex = 0;
        }else{
            welcomeWidgetData.galleryIndex++;
        }
        loadImage();
    }
    
   
    /**
     * @name sakai_global.welcome
     *
     * @class welcome
     *
     * @version 0.0.1
     * @param {String} tuid Unique id of the widget
     * @param {Boolean} showSettings Show the settings of the widget or not
     */
    sakai_global.welcome = function (tuid, showSettings) {
        renderWidget();
    };

    sakai.api.Widgets.widgetLoader.informOnLoad("welcome");
});
