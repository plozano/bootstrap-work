$.fn.validateThis = function() {
	$(this).formValidation({
		framework: 'bootstrap',
		icon: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			FirstName: {
				validators: {
					notEmpty: {
						message: 'First name is required.'
					},
					stringLength: {
						max: 255,
						message: 'Name cannot be more than 255 characters.'
					}
				}
			},
			LastName: {
				validators: {
					notEmpty: {
						message: 'Last name is required.'
					},
					stringLength: {
						max: 255, 
						message: 'Name cannot be more than 255 characters.'
					}
				}
			},
			Email: {
				validators: {
					notEmpty: {
						message: 'Email is required.'
					},
					emailAddress: {
						message: 'That isn\'t a valid email address.'
					},
					stringLength: {
						max: 255,
						message: 'Email cannot be more than 255 characters.'
					},
					regexp: {
						regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
						message: 'That isn\'t a valid email address.'
					}
				}
			},
			Phone: {
				validators: {
					notEmpty: {
						message: 'Phone number is required.'
					},
					stringLength: {
						max: 100,
						message: 'Phone cannot be more than 100 characters.'
					}
				}
			},
			Company: {
				validators: {
					notEmpty: {
						message: 'Company name is required.'
					},
					stringLength: {
						max: 255,
						message: 'Company cannot be more than 255 characters.'
					}
				}
			},
			Num_of_Agents__c: {
				validators: {
					notEmpty: {
						message: 'Number of agents is required.'
					}
				}
			}
		}
	});
}

$(document).ready(function() {
	$('.leadForm').validateThis();
});