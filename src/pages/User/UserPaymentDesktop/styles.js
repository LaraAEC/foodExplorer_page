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

    display: grid;
    grid-template-columns: 3fr  2.5fr;
    grid-template-rows: 10vh auto;
    grid-template-areas:
    "back back"
    "left right";
   
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    > .wrapperBack {
      grid-area: back;
      width: 100%;
      }

    > .columnLeft {
      grid-area: left;
     
      display: flex;
      flex-direction: column;
      align-items: start;
       
      > .pageTitle {
        width: 100%;
        
      > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;  
        
      }
    }

      > section {
        width: 100%;
        height: 40rem;

        overflow-x: hidden;
        overflow-y: auto;
        
        scrollbar-color: transparent transparent; 

        &::-webkit-scrollbar {
          background: transparent;
        } 

      
        > .request {
          > p {
            font-size: 2rem;
            font-weight: 500;
            line-height: 160%;
          }
        }
      }

      > .total {
        > h2 { 
         padding-top: 2rem; 
       }
      }    
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

            &:hover {
                background: ${({ theme }) => theme.COLORS.GRAY_700};
              }

            cursor: pointer;

            .wrapperPaymentMethod {
              display: flex;
              align-items: center;
              justify-content: center;

              &:hover {
                background: ${({ theme }) => theme.COLORS.GRAY_700};
              }

              cursor: pointer;

            .buttonPaymentMethod {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;

              border: none;

              color: ${({ theme }) => theme.COLORS.WHITE_100};
              background: transparent;            

              &:hover {
                background: ${({ theme }) => theme.COLORS.GRAY_700};
              }

              cursor: pointer;
              }   
            }  
          }
        }

        > tbody {
          border: 1px solid var(--light-light-600, #76797B);
          text-align: center;

          tr {
            
            td {
              padding: 4rem 5.5rem;
              text-align: center;
              vertical-align: middle;

              img {
                width: 25rem;
                height: 25rem;
              }
            
              .cardDetails {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                padding: 0 1rem;

                justify-content: start;
                align-items: start;
                width: 33rem; 
                
                > .divCardDetails {
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                  width: 100%;

                  > input {
                    background: transparent;
                    border-radius: 5px;
                    border: 1px solid #808080;
                    
                    width: 100%;
                
                    height: 3.5rem;
                    padding: 1.2rem 1.4rem;
                    
                    color: ${({ theme }) => theme.COLORS.WHITE_100};
                    background: transparent;

                    &::placeholder {
                      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
                      font-weight: 400;
                      font-size: 1.6rem;

                      color: ${({ theme }) => theme.COLORS.GRAY_500};
                    }

                    &:focus {
                      border: 1px solid var(--light-light-100, #FFF);
                      border-radius: 0.5rem;
                      }                  
                   }                  
                }
              
                > .expirationAndCvc {
                  display: flex;
                  gap: 1rem;

                  width: 100%;

                  padding-bottom: 2rem;

                  justify-content: start;       

                  > .divExpirationAndCvc {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    text-align: start;

                    > input {
                      background: transparent;
                      border-radius: 5px;
                      border: 1px solid #808080;
                      
                      width: 100%;
                  
                      height: 3.5rem;
                      padding: 1.2rem 1.4rem;
                      
                      color: ${({ theme }) => theme.COLORS.WHITE_100};
                      background: transparent;

                      &::placeholder {
                        font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
                        font-weight: 400;
                        font-size: 1.6rem;
                        color: ${({ theme }) => theme.COLORS.GRAY_500};
                      } 

                      &:focus {
                        border: 1px solid var(--light-light-100, #FFF);
                        border-radius: 0.5rem;
                        }
                     }
                    }
              }

              > .wrapperButtonCompletePayment{
                  width: 100%;
                  height: 4.6rem;
                }
              
           }
          }
        }
      }
    }
  }  }
`;

