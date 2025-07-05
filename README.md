# Vishwakarma Electric - Contact Form Integration

## API Integration Setup

### AITable API Configuration

The contact form is integrated with AITable API to store form submissions. Follow these steps to configure:

1. **Replace API Token**: 
   - Open `src/config/api.js`
   - Replace `_Paste_Your_API_Token_` with your actual AITable API token

2. **API Endpoint Details**:
   - **Base URL**: `https://aitable.ai/fusion/v1`
   - **Datasheet ID**: `dst6h8kvxTSz220Dqb`
   - **View ID**: `viwZ1HxaWnNuF`
   - **Field Key**: `name`

### Form Fields Mapping

The form submits the following fields to AITable:

| Form Field | AITable Field | Type | Required |
|------------|---------------|------|----------|
| name       | Name          | Text | Yes      |
| email      | Email         | Text | Yes      |
| phone      | Phone         | Text | No       |
| service    | Service       | Text | Yes      |
| message    | Message       | Text | Yes      |

### Features

- **Form Validation**: Client-side validation for required fields
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: Clear feedback for users
- **Form Reset**: Automatic form clearing after successful submission
- **Disabled State**: Prevents multiple submissions during processing

### Testing the Integration

1. Fill out the contact form with test data
2. Submit the form
3. Check your AITable datasheet for the new record
4. Verify all fields are properly mapped

### Error Handling

The form includes comprehensive error handling:
- Network errors
- API response errors
- Validation errors
- Timeout handling

### Security Considerations

- API token should be kept secure
- Consider implementing rate limiting
- Add CORS configuration if needed
- Use environment variables for production

## Usage

Users can now submit contact forms directly through the website, and all submissions will be automatically stored in your AITable database for easy management and follow-up.