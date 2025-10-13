const SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;

export const createAssessment = async (token: string, remoteip: string = 'unknown'): Promise<{ valid: boolean, error?: string }> => {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip: remoteip
      })
    });

    const result = await response.json();
    console.log('Turnstile validation result:', result);
    return { valid: result.success || false };
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { valid: false, error: 'internal-error' };
  }
}
