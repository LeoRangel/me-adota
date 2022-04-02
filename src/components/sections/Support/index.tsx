import { Link } from 'react-router-dom';
import * as S from './styles';
import { SectionHeader, SectionBody } from '../..';

export function Support() {
  return (
    <S.Support>
      <SectionHeader
        title="Outras formas de ajudar"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis, dignissim
        id sapien."
        isTextCenter={false}
        hasBG={false}
        buttonText="Ver todos"
        buttonLink="/"
      />

      <SectionBody>
        <S.CardsList>
          <S.Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/b9da/5e9e/acbc354a5b3a7a4e6b95085d02ed5959?Expires=1649635200&Signature=Tkzl1AuMDqiYjZC0zUJaCTjO0ldxTfjfR7z-aeKlbRKG1IV2O3~bA1UbDgdGELt-h4o8pYjKzd59LgQ1rCH4HnXC~NBnvAC5mgiX35pKSW7qDKTAQGzfeTVBjAU4MP-iC32FNwr4V5Y5m2brXuDSYt7EVExGCnkoVTovFMabt64QTrX1msPk-UoATm2Xowv00cvqiyW6WZRrl4Ozv5e7ptGgkLV8GcKUM0oJwIoTEkOMZFjiWvvhkyIjv4x0pc3bFmwmopSawsbdz6XVclBmMp8Kg1vm8tkBDFrrjFPPaXs-Uj617xaUHR6KMuSmnMACDdMxVxPw0YFzcmzAZ1UUog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="Pessoa ajudando cachorro na rua"
            />

            <S.CardBody>
              <h3>
                <Link to="/">Ser voluntário</Link>
              </h3>
            </S.CardBody>
          </S.Card>

          <S.Card>
            <img
              src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Pessoa tocando a mão de gato"
            />

            <S.CardBody>
              <h3>
                <Link to="/">Apadrinhar pet</Link>
              </h3>
            </S.CardBody>
          </S.Card>

          <S.Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/548d/6222/e39cf48f530b1b726ab62e37ae8501a7?Expires=1649635200&Signature=NWABO2hL~c4ODFATbilrOPIDQQZkwIENQF07oWJyrY9bENBvLTEHfSbztEOrCmE1u2HBPx-wzwyJ9hcATLvFoikVjTuxuTSXIdEyzfU2SdP~5CRBdbys0Rfm7-1a3p-sp~MFNZpQ9Ctxr-ncD0d3FTm5DhRy-XTQYNa0b09E8Ooc~faRmfmzRCxIsFB0LGO2mMdMmQggOQCrORts2DHTeBiT-lRpy8nPGWAeSpt4Po7kRFM4sHJFTkTiuGI6ncPmRop-JniXIx1Ypmf36LpD9qfefhtD8KoMXeKxdrDYJzdlUPY816UrLnsNaRz336RfDt6lmqRrhJ5nnrx-d8Klcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="Tijela com ração"
            />

            <S.CardBody>
              <h3>
                <Link to="/">Fazer doação</Link>
              </h3>
            </S.CardBody>
          </S.Card>

          <S.Card>
            <img
              src="https://s3-alpha-sig.figma.com/img/caea/a85a/570fb861033733b028e94c12465789c2?Expires=1649635200&Signature=E0NPb~q-GDTErXH-2PSmp4MGS2Pb9JziDha3WwKEBHEJPMYY1J7wLkWtrWhdnbkbFvS3LZ3BP00-ygLIMe2C0XTcchR~CbBlyAjHK71CUvSv8cksd74PZPRoZbBKxm8m87P~GulVIzGxFufPlZvMeIpFvaOTL0K8-bF~GIz1wL6EGx3tHBBlNltxIMVMo0sjReLzQSYHxlAxQv9MgF-FtPy5V~HeUkXN2AQNl6VQTg~3ai21Mjl3HwNY6aEzdCg99C1JiTmRq~WsMKhoJzoZsdayVT1zLYi8Ti87WCi3ZGwpb6R8~93PIKD2bvfpT2fqvLdrLoVpJN-hLR9XMVO5LA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="Cachorro deitado sobre pano"
            />

            <S.CardBody>
              <h3>
                <Link to="/">Lar temporário</Link>
              </h3>
            </S.CardBody>
          </S.Card>
        </S.CardsList>
      </SectionBody>
    </S.Support>
  );
}
