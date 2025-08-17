import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #080b1dff;
    --green: #4EA1FF;
    --blue: #01b916ff;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }

  /* Modern scrollbar tuned for navy background */
  :root{
    --scroll-c1: #00f0ff; /* cyan */
    --scroll-c2: #4ea1ff; /* electric blue */
    --scroll-track: rgba(255,255,255,0.02);
    --scroll-edge: rgba(0,0,0,0.35);
  }

  /* Firefox fallback */
  html{
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-c2) var(--scroll-track);
  }

  /* WebKit browsers */
  *::-webkit-scrollbar{
    width: 14px;
    height: 14px;
  }

  *::-webkit-scrollbar-track{
    background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.06));
    border-radius: 12px;
    margin: 6px 0;
    box-shadow: inset 0 2px 6px rgba(0,0,0,0.35);
  }

  *::-webkit-scrollbar-thumb{
    border-radius: 999px;
    background: linear-gradient(180deg, var(--scroll-c1), var(--scroll-c2));
    border: 3px solid rgba(11,15,42,0.06);
    box-shadow: 0 8px 24px rgba(78,161,255,0.12), inset 0 1px 0 rgba(255,255,255,0.12);
    background-size: 200% 200%;
    transition: transform 180ms cubic-bezier(.2,.9,.2,1), box-shadow 180ms ease, filter 140ms ease;
    animation: navyShimmer 3.5s ease-in-out infinite;
  }

  *::-webkit-scrollbar-thumb:hover{
    transform: scale(1.06);
    box-shadow: 0 14px 44px rgba(78,161,255,0.22), inset 0 2px 0 rgba(255,255,255,0.18);
    filter: brightness(1.06);
    animation-duration: 5s;
  }

  /* Light theme adjustments */
  :root.light{
    --scroll-c1: #05c3ff;
    --scroll-c2: #2b6cff;
    --scroll-track: rgba(0,0,0,0.03);
  }

  @keyframes navyShimmer{
    0%{ background-position: 0% 50%; }
    50%{ background-position: 100% 50%; }
    100%{ background-position: 0% 50%; }
  }
`