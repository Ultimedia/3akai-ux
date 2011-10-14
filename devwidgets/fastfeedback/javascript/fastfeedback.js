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
require(["jquery", "sakai/sakai.api.core"], function($, sakai){

    /**
     * @name sakai.fastfeedback
     *
     * @class fastfeedback
     *
     * @description
     * Initialize the fastfeedback widget
     *
     * @version 0.0.1
     * @param {String} tuid Unique id of the widget
     * @param {Boolean} showSettings Show the settings of the widget or not
     */
    sakai_global.fastfeedback = function(tuid, showSettings){
		var $rootel = $("#" + tuid);
	
        // containers
        var fastfeedbackClickToGiveFeedbackContainer = $("#fastfeedback_click_to_give_feedback_container", $rootel);
        var fastfeedbackFeedbackContainer = $("#fastfeedback_feedback_container", $rootel);
        var fastfeedbackFeedbackForCourseContainer = $("#fastfeedback_feedback_for_course_container", $rootel);

        // buttons
        var fastfeedbackActionDontSend = $("#fastfeedback_action_dont_send", $rootel);
        var fastfeedbackActionSend = $("#fastfeedback_action_send", $rootel);
        var fastfeedbackClickToGiveFeedback = $("#fastfeedback_click_to_give_feedback", $rootel);

        // Feedback
        var fastfeedbackFeedbackInput = $("#fastfeedback_feedback_input", $rootel);
        var fastfeedbackFeedbackFor = $("#fastfeedback_feedback_for", $rootel);
        var fastfeedbackFeedbackForCourse = $("#fastfeedback_feedback_for_course", $rootel);
        var subject = "";
        var configVars = {};

        // i18n
        var fastfeedbackFeedbackSent = $("#fastfeedback_feedback_sent", $rootel);
        var fastfeedbackFeedbackSuccessfullySent = $("#fastfeedback_feedback_successfully_sent", $rootel);
        var fastfeedbackFeedbackNotSent = $("#fastfeedback_feedback_not_sent", $rootel);
        var fastfeedbackFeedbackNotSuccessfullySent = $("#fastfeedback_feedback_not_successfully_sent", $rootel);
        var fastfeedbackGiveFeedback = $("#fastfeedback_give_feedback", $rootel);

        // Templates
        var fastfeedbackFeedbackForCourseTemplate = $("#fastfeedback_feedback_for_course_template", $rootel);

        // Config
        var configLocation = "./devwidgets/fastfeedback/config/config.txt";

        var resetInputField = function(){
            $(fastfeedbackFeedbackInput).val("");
            $(fastfeedbackActionSend).removeAttr("disabled");
        };

        var handleSentMessage = function(success){
            if(success){
                sakai.api.Util.notification.show($(fastfeedbackFeedbackSent).html(), $(fastfeedbackFeedbackSuccessfullySent).html());
                resetInputField();
            } else {
                sakai.api.Util.notification.show($(fastfeedbackFeedbackNotSent).html(), $(fastfeedbackFeedbackNotSuccessfullySent).html());
            }
        };

        /**
         * Send the message/e-mail with feedback
         */
        var sendFeedback = function(){
        	// get the user from the config file
        	var feedbackUser = sakai.config.fastfeedbackwidget.fastfeedbackUser;
        	
            if ($(fastfeedbackFeedbackInput).val().trim() && $(fastfeedbackFeedbackForCourse).val() !== "no_value") {
                sakai.api.Communication.sendMessage(feedbackUser, sakai.data.me,
                    subject, $(fastfeedbackFeedbackFor).val() + " feedback \n\n" + $(fastfeedbackFeedbackInput).val(),
                    "message", false, handleSentMessage, true, "new_message");
            } else {
                sakai.api.Util.notification.show($(fastfeedbackFeedbackNotSent).html(), $(fastfeedbackGiveFeedback).html());
            }
        };

        /**
         * Add binding to the different components
         */
        var addBinding = function(){
            $(fastfeedbackActionSend).click(function(){
                $(this).attr("disabled", "disabled");
                sendFeedback();
            });
            $(fastfeedbackActionDontSend).click(function(){
                resetInputField();
            });
            $(fastfeedbackFeedbackForCourse).live("change", function(){
            	fastfeedbackFeedbackForCourse = $("#fastfeedback_feedback_for_course", $rootel);
            
                if ($(fastfeedbackFeedbackForCourse)[0].selectedIndex !== 0) {
                    $(this).children("option[value='no_value']").remove();
                }
                subject = "TEACHANON: " + configVars.config.courses[$(fastfeedbackFeedbackForCourse)[0].selectedIndex];
                subject = subject.replace('=', ':');
            });
        };

        /**
         * Read and process the configuration file that contains all subject lines
         */
        var readConfig = function(){
            $.ajax({
                url: configLocation,
                type: "GET",
                success: function(data){
                    var lines = data.split(/\r?\n/g).sort();
                   // Fill the configVars variable
                   configVars.config = {
                       courses : [],
                       selectedCourse : ""
                   }
                   for (var line in lines) {
                        if (lines.hasOwnProperty(line)) {
                            // Filter out empty lines
                            if($.trim(lines[line])){
                                // Filter out lines starting with '#' and 'FFF'
                                if(lines[line].substring(0,1) !== '#' && lines[line].substring(0,3) !== "FFF"){
                                    configVars.config.courses.push(lines[line]);
                                    if ($.trim(lines[line].split(":")[0].split("(")[0]) === sakai_global.group.groupData["sakai:group-title"] || $.trim(lines[line].split(":")[0]) === sakai_global.group.groupData["sakai:group-title"]) {
                                        configVars.config.selectedCourse = $.trim(lines[line].split(":")[0].split("(")[0]);
                                        subject = "TEACHANON: " + $.trim(lines[line]);
                                      
                                    }
                                }
                            }
                        }
                   }

                   // Render the detailed information
                   $(fastfeedbackFeedbackForCourseContainer).html(sakai.api.Util.TemplateRenderer(fastfeedbackFeedbackForCourseTemplate, configVars));

                   $(fastfeedbackActionSend).removeAttr("disabled");
                   $(fastfeedbackFeedbackForCourse).trigger("change");
                },
                error: function(xhr, textStatus, thrownError){
                    debug.log(xhr, textStatus, thrownError);
                }
            });
        };

        /**
         * Initialize the widget
         */
        var doInit = function(){
            $(fastfeedbackActionSend).attr("disabled", "disabled");
            readConfig();
            addBinding();
        };
        doInit();
    };

    sakai.api.Widgets.widgetLoader.informOnLoad("fastfeedback");
});