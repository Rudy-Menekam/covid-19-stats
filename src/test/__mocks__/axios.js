const mockResponse = {
  data: {
    countryList: [
      {
        id: 24,
        death: '1968',
        critical: '13',
        country: 'Cameroon',
        active: '133',
        cases: '124741',
        recovered: '122640',
        tests: '1751774',
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
