$.fn.openModal = function() {
	
	var knowledgeId;
	var knowledgeType;
	
	if ($(this).parents('.knowledge').length) {
		knowledgeId = $(this).parents('.knowledge').attr('knowledge-id');
		knowledgeType = $(this).parents('.knowledge').attr('knowledge-type');
	}
	else if ($(this).parents('.knowledge-multiple').length) {
		knowledgeId = $(this).parents('.knowledge-multiple').attr('knowledge-id');
		knowledgeType = $(this).parents('.knowledge-multiple').attr('knowledge-type');
	}
	
	var modalCode = '<div class="modal-bg" onclick="$(this).closeModal()"></div> \
				<div class="modal-form invisible"> \
					<div class="exit" onclick="$(this).closeModal()"> \
						<span class="glyphicon glyphicon-remove"></span> \
					</div> \
					<div class="container"> \
						<h2>Get the ' + knowledgeType + '</h2> \
						<form id="knowledge-form" class="knowledge-form col-xs-12" method="post" action="https://snippet.omm.crownpeak.com/p/95210910-e4f2-4529-9784-a8bdad95140c"> \
							<div class="form-group col-xs-12 col-md-6"> \
								<input id="WcoForm_FirstName" class="form-control" name="FirstName" placeholder="First Name" type="text" required /> \
							</div> \
							<div class="form-group col-xs-12 col-md-6"> \
								<input id="WcoForm_LastName" class="form-control" name="LastName" placeholder="Last Name" type="text" required /> \
							</div> \
							<div class="form-group col-xs-12 col-md-6"> \
								<input id="WcoForm_Email" class="form-control" maxlength="255" name="Email" placeholder="Email" type="text" required /> \
							</div> \
							<div class="form-group col-xs-12 col-md-6"> \
								<input id="WcoForm_Phone" class="form-control" maxlength="255" name="Phone" placeholder="Phone" type="text" required /> \
							</div> \
							<div class="form-group col-xs-12 col-md-6"> \
								<input id="WcoForm_Company" class="form-control" maxlength="255" name="Company" placeholder="Company" required type="text" /> \
							</div> \
							<div class="form-group dropdown col-xs-12 col-md-6"> \
								<label class="control-label" for="WcoForm_Num_of_Agent__c">Number of Agents</label> \
								<span class="glyphicon glyphicon-chevron-down"></span> \
								<div class="custom-select"> \
									<select id="WcoForm_Num_of_Agents__c" class="form-control" name="Num_of_Agents__c" required> \
										<option disabled selected value="">Number of Agents</option> \
										<option value="1-4">1-4</option> \
										<option value="5-9">5-9</option> \
										<option value="10-25">10-25</option> \
										<option value="26-50">26-50</option> \
										<option value="51-100">51-100</option> \
										<option value="101+">101+</option> \
									</select> \
								</div> \
							</div> \
							<div class="form-group submit col-xs-12"> \
								<input class="btn btn-primary" value="Submit" type="submit" /> \
							</div> \
							<input type="hidden" name="RF_SITE_Company" /> \
							<input type="hidden" name="RF_inferredState" /> \
							<input type="hidden" name="RF_inferredCountry" /> \
							<input type="hidden" name="RF_SITE_TradeName" /> \
							<input id="Keywords__C" type="hidden" name="Keywords__c" /> \
							<input id="Ad_Group__c" type="hidden" name="Ad_Group__c" /> \
							<input value="Web" type="hidden" name="Lead_Entry_Origin__c" /> \
							<input id="Campaign__c" type="hidden" name="Campaign__c" /> \
							<input id="LeadSource" value="Website" type="hidden" name="LeadSource" /> \
							<input id="Lead_Source_Detail__c" type="hidden" name="Lead_Source_Detail__c" /> \
							<input id="Five9_Web_Source__c" type="hidden" name="Five9_Web_Source__c" /> \
							<input id="Website_Path__c" type="hidden" name="Website_Path__c" /> \
							<input id="Program__c" type="hidden" name="Program__c" /> \
							<input id="GCLID__c" type="hidden" name="GCLID__c" /> \
							<input id="Lead_Action__c" type="hidden" name="Lead_Action__c" /> \
							<input id="utm_source" type="hidden" name="utmsource" /> \
							<input value="fe3c789c-0cd3-42d3-a3f7-2df02892fd09" type="hidden" name="WcoFormId" /> \
							<div class="text-container col-xs-12"> \
								<p class="small">Gain access to all contact center resources, such as demos, white papers, data sheets, and more.</p> \
								<p class="small"><strong>All fields are required.</strong></p> \
							</div> \
						</form> \
					</div> \
				</div>';
	
	// Open modal form window
	if ($(this).parents('.knowledge').length) {
		$(this).parents('.knowledge').append(modalCode);
		$(this).parents('.knowledge').children('.modal-bg').css('display', 'block').animate({
			'opacity': '1'
		}, 250, function() {
			$(this).parents('.knowledge').children('.modal-form').removeClass('invisible').addClass('visible');
		});
	}
	else if ($(this).parents('.knowledge-multiple').length) {
		$(this).parents('.knowledge-multiple').append(modalCode);
		$(this).parents('.knowledge-multiple').children('.modal-bg').css('display', 'block').animate({
			'opacity': '1'
		}, 250, function() {
			$(this).parents('.knowledge-multiple').children('.modal-form').removeClass('invisible').addClass('visible');
		});
	}
	
}

$.fn.closeModal = function() {
	
	if ($(this).parents('.knowledge').length) {
		$(this).parents('.knowledge').children('.modal-form').removeClass('visible').addClass('invisible');
		$(this).parents('.knowledge').children('.modal-bg').animate({
			'opacity': '0'
		}, 250, function() {
			$(this).css('display', 'none');
			$(this).remove();
			$(this).siblings('.modal-form').remove();
		});
	}
	else if ($(this).parents('.knowledge-multiple').length) {
		$(this).parents('.knowledge-multiple').children('.modal-form').removeClass('visible').addClass('invisible');
		$(this).parents('.knowledge-multiple').children('.modal-bg').animate({
			'opacity': '0'
		}, 250, function() {
			$(this).css('display', 'none');
			$(this).remove();
			$(this).siblings('.modal-form').remove();
		});
	}
}