import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  
  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
  "header"
  "main"
  "footer";
  
  overflow-y: hidden;
  
  > main { 
    grid-area: main;
    width:100%;

    margin: 0 auto;
    padding: 4.4rem;
    
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent;

    &::-webkit-scrollbar {
        background: transparent;
    }
    
    @media (min-width: 768px) {
      padding-top: 7rem;
    }

    @media (min-width: 1024px) {
      padding-top: 4rem;
      max-width: 102.4rem;
    }

    @media (min-width: 1300px) {
      max-width: 110.0rem;
    }
   }

   > header {
    grid-area: header;
    width: 100%;
  }

  > footer {
    grid-area: footer;
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  height: 100vh;

  > .page {
    max-width: 100%;
    height: 100%;

    display: flex;
   
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    > .wrapperBack {
      grid-area: back;
      width: 100%;
      }


    .columnRight {
      grid-area: right;

      display: flex;
      flex-direction: column;
      align-items: start;

      > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%; 
      }
      
      > table {
      border-collapse: collapse;
      margin-bottom: 2rem;
     
        > thead {
          tr, th {
          border: 0.666px solid var(--light-light-600, #76797B);
          padding: 1.5rem;
          text-align: center;
          }

          th {
            width: 50%; 
            .wrapperPayment {
              display: flex;
              align-items: center;
              justify-content: center;

              .buttonPayment {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              border: none;
              background: transparent;
              cursor: pointer;
              color: ${({ theme }) => theme.COLORS.WHITE_100};
              }
            }  
          }
        }

        > tbody {
          border: 1px solid var(--light-light-600, #76797B);
          text-align: center;

          tr {
            
            td {
              padding: 4rem;
              text-align: center;
              vertical-align: middle;
            
              .cardDetails {
                display: flex;
                flex-direction: column;
                gap: 2rem;

                padding: 0 1rem;

                justify-content: start;
                align-items: start;
                max-width: 40rem; 
                
                > .divCardDetails {
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                  width: 100%; 
                }

                > .expirationAndCvc {
                  display: flex;
                  gap: 1rem;

                  width: 60%;

                  padding-bottom: 2rem;

                  justify-content: start;       

                  > .divExpirationAndCvc {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    text-align: start;

                    > input {
                      width: 50%;
                    }
                  }
                }

                > .wrapperButtonPayment{
                  width: 100%;
                  height: 4.6rem;
                }
              }
              
              img {
                width: 20rem;
                height: 20rem;
              }
            }
          }    

        }
      }
    }
 
  }  
`;

