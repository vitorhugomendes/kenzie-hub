import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-0:#F8F9FA;
    --grey-1:#868E96;
    --grey-2:#343B41;
    --grey-3:#212529;
    --grey-4:#121214;

    --sucess:#3FE864;
    --negative:#E83F5B;

    --font-size-16px: 1rem;
    --font-size-12px: .75rem;
}

body {
    max-width: 1600px;
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
    background-color: var(--grey-4)
}
`;
