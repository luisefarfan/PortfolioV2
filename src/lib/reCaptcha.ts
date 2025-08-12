import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

/**
 * Create an assessment to analyze the risk of a UI action.
 *
 * projectID: Your Google Cloud Project ID.
 * recaptchaSiteKey: The reCAPTCHA key associated with the site/app
 * token: The generated token obtained from the client.
 * recaptchaAction: Action name corresponding to the token.
 */
export const createAssessment = async ({
	projectID = import.meta.env.GCP_PROJECT_ID,
	recaptchaKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
	token = '',
	recaptchaAction = '',
}): Promise<{ score: number; valid: boolean }> => {
	// Create the reCAPTCHA client.
	const client = new RecaptchaEnterpriseServiceClient({
		credentials: {
			type: 'service_account',
			project_id: import.meta.env.GCP_PROJECT_ID,
			private_key_id: import.meta.env.RECAPTCHA_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
			private_key: import.meta.env.RECAPTCHA_SERVICE_ACCOUNT_PRIVATE_KEY,
			client_email: import.meta.env.RECAPTCHA_SERVICE_ACCOUNT_EMAIL,
			client_id: import.meta.env.RECAPTCHA_SERVICE_ACCOUNT_CLIENT_ID,
			universe_domain: 'googleapis.com',
		},
	});
	const projectPath = client.projectPath(projectID);

	// Build the assessment request.
	const request = {
		assessment: {
			event: {
				token: token,
				siteKey: recaptchaKey,
			},
		},
		parent: projectPath,
	};

	try {
		const [response] = await client.createAssessment(request);

		if (!response) {
			return { score: 0, valid: false };
		}

		// Check if the token is valid.
		if (!response.tokenProperties?.valid) {
			console.log(
				`The CreateAssessment call failed because the token was: ${response.tokenProperties?.invalidReason}`
			);
			return { score: 0, valid: false };
		}

		// Check if the expected action was executed.
		// The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
		if (response.tokenProperties?.action === recaptchaAction) {
			// Get the risk score and the reason(s).
			// For more information on interpreting the assessment, see:
			// https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
			const score = response.riskAnalysis?.score ?? 0;
			console.log(`The reCAPTCHA score is: ${score}`);
			response.riskAnalysis?.reasons?.forEach((reason) => {
				console.log('Risk reason: ', reason);
			});

			client.close();

			return { score, valid: score * 100 > 70 };
		} else {
			console.log(
				'The action attribute in your reCAPTCHA tag does not match the action you are expecting to score'
			);
			return { score: 0, valid: false };
		}
	} catch (error) {
		console.error(`Error with CreateAssessment: ${error}`);
		client.close();
		return { score: 0, valid: false };
	}
};
