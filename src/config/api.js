// API Configuration
export const API_CONFIG = {
  AITABLE: {
    BASE_URL: 'https://aitable.ai/fusion/v1',
    DATASHEET_ID: 'dst6h8kvxTSz220Dqb',
    VIEW_ID: 'viwZ1HxaWnNuF',
    API_TOKEN: '_Paste_Your_API_Token_', // Replace with your actual API token
    FIELD_KEY: 'name'
  }
};

// API Service Functions
export const submitContactForm = async (formData) => {
  const response = await fetch(
    `${API_CONFIG.AITABLE.BASE_URL}/datasheets/${API_CONFIG.AITABLE.DATASHEET_ID}/records?viewId=${API_CONFIG.AITABLE.VIEW_ID}&fieldKey=${API_CONFIG.AITABLE.FIELD_KEY}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_CONFIG.AITABLE.API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: formData.name,
              Email: formData.email,
              Phone: formData.phone,
              Service: formData.service,
              Message: formData.message
            }
          }
        ],
        fieldKey: API_CONFIG.AITABLE.FIELD_KEY
      })
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};