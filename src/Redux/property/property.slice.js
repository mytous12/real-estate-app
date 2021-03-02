// Lib imports
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  propertyForm: {
    ownershipType: null,
    propertyType: null,
    constructionStatus: null,
    propertyAge: '',
    bhk: '',
    bathroom: '',
    balcony: '',
    furnishType: null,
    coveredParking: '',
    openParking: '',
    cost: '',
    maintenanceCharges: '',
    builtUpArea: '',
    monthlyRent: '',
    availableFrom: '',
    securityDeposit: null,
    securityDepositAmount: '',
    preferredTenants: null,
    possessionStatus: null,
    plotPrice: '',
    plotArea: '',
    areaUnit: '',
    length: '',
    width: '',
    widthOfFacingRoad: '',
    possessionDate: '',
    city: '',
    building: '',
    locality: '',
    flatNo: '',
    floorNo: '',
    totalFloors: '',
    images: '',
  },
};

const propertySlice = createSlice({
  name: 'propertySlice',
  initialState: INITIAL_STATE,
  reducers: {

  },
});

export default propertySlice.reducer;
