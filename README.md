# React API Challenge

This React application is designed to demonstrate basic login functionality, resource listing, and displaying resource details. The primary focus is on integrating the `reqres.in` API for user authentication and data retrieval using a dedicated service layer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (Version 12.x or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository to your local machine:
git clone https://github.com/ppsdang/react-api-challenge.git
cd react-api-challenge

2. Install dependencies:
npm install


3. Run the development server:
npm start


The application will be available at `http://localhost:3000/`.

## Tasks

1. **Complete the Authentication Service:**
Implement the `login` function in `apiService.js` to integrate with the Reqres API for user authentication.
- Login API: `https://reqres.in/api/login`

2. **Implement Resource Listing and Detail Fetching in the Service Layer:**
- Complete the `fetchResources` and `fetchResourceDetail` functions in `apiService.js` to fetch a list of resources and details of a specific resource.
- Resources List API: `https://reqres.in/api/resources`
- Resource Detail API: `https://reqres.in/api/resource/{:id}`

3. **Enhance the Resource List and Detail Components:**
Utilize the functions from `apiService.js` in `ResourceList.js` and `ResourceDetail.js` to display the fetched data.

4. **Bonus Tasks:**
- Implement error handling for API requests.
- Add loading indicators while data is being fetched.

For detailed API documentation, please visit [Reqres](https://reqres.in/).


