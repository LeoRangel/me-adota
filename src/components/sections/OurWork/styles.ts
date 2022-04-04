import styled from 'styled-components';

export const OurWork = styled.section`
  background: linear-gradient(to top, var(--bg-black-opacity-50), var(--bg-black-opacity-50)),
    url('https://s3-alpha-sig.figma.com/img/7080/8f5e/c7c8705cb348b4eaeb7e7da52b18b02b?Expires=1649635200&Signature=K~nsB97UsNBb~egvTMhBL7EhezwmQ0FbjM2v4WzVopM3MllhY4s5uH-zmXhoLSPXhZi8j~4xo~NmepUb-Q~V-Unit68nceza7FmO3h~czhTfNpB0POESKY~0~zRE5EHLbmz4-jdjRwJhLk8YWpjXIGUCAPraVE696cXukXNeVAkufxgtLg3WsdeStnMb0uVm4-NGFeK2deLCSjH6tk6CpXD77OfwBMbO1hrmnVJaHf2V4jpmd3TwDJUURcU40iqjcsl3x-wKBCYnRXU864yI5GDHBdMNRKvB4ifSA3VHKcnhCp4rrlgR~IIRDjQlXqq3T-8u4tDM-26yOT~Gzz5zdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--gray-6-const);

  h2 {
    color: var(--gray-6-const);
    text-shadow: var(--shadow-1);
  }

  p {
    color: var(--gray-6-const);
    text-shadow: var(--shadow-1);
    margin: 0;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);
`;

export const Item = styled.div`
  max-width: 200px;
  color: var(--gray-6-const);
  border: 1.5px solid var(--primary-color);
  border-radius: var(--border-radius-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

export const ItemHeader = styled.div`
  width: 100%;
  padding: var(--spacing-4);
  background-color: var(--primary-color);
  display: grid;
  place-items: center;

  h3 {
    font-size: 3rem;
    text-shadow: var(--shadow-1);
    margin: 0;
  }
`;

export const ItemBody = styled.div`
  width: 100%;
  padding: var(--spacing-4);
  display: grid;
  place-items: center;
`;
