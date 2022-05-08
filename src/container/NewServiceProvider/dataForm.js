exports.dataForm=  { ServiceProviderName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Service Provider Name',
      label: "Service Provider Name"
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  PointofContactName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Point of Contact Name',
      label: "Point of Contact Name"
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  EmailAddress: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Email Address',
      label: "Email Address"
    },
    value: '',
    validation: {
      required: true,
      isEmail:true
    },
    valid: false,
    touched: false
  },
  Country: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Enter Country',
      label: "Country"
    },
    value: '',
    validation: {
      required: true,
    
    },
    valid: false,
    touched: false
  },
  MobileNumber: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Enter Mobile Number',
      label: "Mobile Number"
    },
    value: '',
    validation: {
      required: true,
      isPhoneNumber:true
    },
    valid: false,
    touched: false
  },
  TypeOfWork: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Enter Type Of Work',
      label: "Type Of Work"
    },
    value: '',
    validation: {
      required: true,
    
    },
    valid: false,
    touched: false
  },
  Typeoffinishes: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Enter Type of finishes',
      label: "Type of finishes"
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  Date: {
    elementType: 'input',
    elementConfig: {
      type: 'date',
      label: "date"
    },
    value: '',
    validation: {
      required: true,
    
    },
    valid: false,
    touched: false
  },
  categori: {
    elementType: 'select',
    label: "Category",
    elementConfig: {
      options: [
        { value: 'PRELIMINAIRIES' },
        { value: 'DEMOLITION WORK' },
        { value: 'WALL CONSTRUCTION' },
        { value: 'FLOOR CONSTRUCTION' },
        { value: 'CEILING CONSTRUCTION' },
        { value: 'DOOR & IRONMONGERY' },
        { value: 'WINDOW' },
        { value: 'SANTTARY WARES,FITTINGS AND ACCESSORIES' },
        { value: 'MISCELLANEOUS' },
        { value: 'ELECTRICAL FITTINGS' },
        { value: 'ELECTRICAL WORKS' },
        { value: 'AIR-CONDITIONING WORKS' },
        { value: 'PLUMBING WORKS' },
        { value: 'INFORMATION COMMUNICATION TECHNOLOGY WORKS' },
        { value: 'OTHER WORK TO BE INCLUDED' },

      ]
    },
    value: 'fastest',
    validation: {},
    valid: true
  }
}