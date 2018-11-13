export default {
  reportTime: "2018-10-26 13:45:25",
  environment: {
    ATG: "PROD",
    CT: "PROD"
  },
  totalProducts: {
    ATG: 5210,
    CT: 4770
  },
  language_en: {
    totalProducts: {
      ATG: 1212,
      CT: 1102
    },
    delta: [
      {
        atg: {
          code: "121223",
          skus: [
            {
              98978: {
                availability: "E_AVAILABLE"
              },
              754754: {
                availability: "E_AVAILABLE"
              }
            }
          ]
        },
        ct: {
          code: "121223",
          skus: [
            {
              98978: {
                availability: "E_BACKORDER"
              },
              754754: {}
            }
          ]
        }
      },
      {
        atg: {
          code: "8787678",
          skus: [
            {
              222232: {
                availability: "E_AVAILABLE"
              },
              444434: {
                availability: "E_NOSHOW"
              }
            }
          ]
        },
        ct: {}
      }
    ]
  },
  language_fr: {
    totalProducts: {
      ATG: 121,
      CT: 112
    },
    delta: [
      {
        atg: {
          code: "12321223",
          skus: [
            {
              98978: {
                availability: "E_NOSHOW"
              },
              754754: {
                availability: "E_AVAILABLE"
              }
            }
          ]
        },
        ct: {
          code: "12321223",
          skus: [
            {
              98978: {
                availability: "E_BACKORDER"
              },
              754754: {}
            }
          ]
        }
      },
      {
        atg: {
          code: "8787678",
          skus: [
            {
              222232: {
                availability: "E_AVAILABLE"
              },
              444434: {
                availability: "E_NOSHOW"
              }
            }
          ]
        },
        ct: {
          code: "8787678",
          skus: [
            {
              222232: {
                availability: "E_BACKORDER"
              },
              444434: {
                availability: "E_AVAILABLE"
              }
            }
          ]
        }
      }
    ]
  }
};
