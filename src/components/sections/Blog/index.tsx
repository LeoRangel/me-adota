import * as S from './styles';
import { SectionHeader, SectionBody, PostCard } from '../..';

export function Blog() {
  return (
    <S.Blog>
      <SectionHeader
        title="Últimos posts do blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ipsum, facilisis eu ornare quis, dignissim
        id sapien."
        isTextCenter={false}
        hasBG
        buttonText="Ver todos"
        buttonLink="/"
      />

      <SectionBody>
        <S.CardsList>
          <PostCard
            link="/"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="https://s3-alpha-sig.figma.com/img/0269/e680/64a34730465c76439c0123a514695798?Expires=1649635200&Signature=DEugI~AXQMs6V54x4-0JYVI2OWn-Q7H4~rhstnMZgkvdQOAi4TudzjJrfuTAGRu1gDk3C~c4NfKfNrD7UDN2dUvvSOD3sJJgTWmAUx2MLGwIfOf~9KSBAFtLt9zSckS50grZqTudPk-Bas5EtKurIg5HwO7OLSQllfFVf9aqFEy6PotXlDS2NSu0fKeAJ6FvAEjvS9zfG~edvJPOjNHRCde-E4ae8Y5TBJCwfuyI9pAepiokcXA3BvhApmk01ny6aK3wKLFJUrX40kR7p~6DK4ilj1ZrOmTgaqj5e-hb4HnXhbaF65bJR7p8TtZ6c9FqtgTMcu2WauzpuzKspU2Bbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            imgAlt="Cachorrinho sendo segurado"
            category="Adoção"
            categoryLink="/"
          />

          <PostCard
            link="/"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="https://s3-alpha-sig.figma.com/img/0d71/704b/4d4a352aea0177407cc9fb1f99c9d2d2?Expires=1649635200&Signature=Fv17jmZd2RAC6FN1qwL~H7~bpq8mUSQCtav7wpMbJP8k8TiSlVvEZCr685~tkk129Og~Ob8j3I~oKmmNAEFez2e-BNYIt-GRY~iheY9WrQ~wOywpdXTcmvR0pwcw1E2pj~QIC1fKK0wO5Jm5eWML-Isuv80plYLz9gPXtTON0WkwO5kXJD8DxZpd0q1Drl1cjDtQyXlHAJP71VaK8ilBE6IPvsrYhTff4kenQYRrkcFryA91hUo~~zfcZDGBc4EnZXy2kHg9upKNGzQPUT0iNk2UHlDPF8qhvT4Sy3aCEZotcyKp5XKNOV~AZZPY5Vq4QpyKl-gUmGvmQFkyEmR8cA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            imgAlt="Mulher dando banho em cachorro"
            category="Saúde do pet"
            categoryLink="/"
          />

          <PostCard
            link="/"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="https://s3-alpha-sig.figma.com/img/024d/056a/33b4f9f288ef6665c34282b4af6b50af?Expires=1649635200&Signature=aQVK0phghk-pNEWMDsVTTfWNYcKSXk6m04l90mPELUmR-aMTmbY9b8D3LFKPn7BRXLgaK6~OIl89lX010GzITAVIyCQfKc6o9Y6tNTwwHXE40zHquMPkafGSR-s2B-ZwmY41YmjonTFINmLITht5NnZMOnbBmOKB~mk7VgZcZDkxMkmOOV6mjRQ~J2c2bEGBe-beS0ltvj4jZ50Aaax577UDapHFVWolP7WZkQxgWwCbdih3WT5xS8-mUgnNeg2Ot76pvHxnMTCERHpaaawFd75c7AAuSnuEgjTdt5zABapGRooXtrFJHL4iJyuLwAx7y5HHZT2oOUTSTp2SZxyTaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            imgAlt="Gatinho recebendo carinho"
            category="Adoção"
            categoryLink="/"
          />

          <PostCard
            link="/"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            img="https://s3-alpha-sig.figma.com/img/4a95/5426/6913869f5d6f1cdf5c69194d4b2213e6?Expires=1649635200&Signature=BaL0xFpHeAQs6jjc87hTZ33jUtawItYeoagXfAIRcRbYUwnYpxvztVayI49rtpEqOb62ORXSat9HMQL0j~nJZkEinxkoSGprRRvWovkWbrI80g88QoV9CQ-Xq9IwQTbmCREu1tQFqrUdJwp3Rtis2fWyAsupu6DehIZJJHfEVBGhD4v09U7BH6SL89dXd2b757g4KnTjCQzy8UZrSsKHH9GYsKwuqoF7oycHt~McXKC3SF2g0OtKpC8h7N7TCMWh6rW1SpdtRqJ6uXUaZi2CNUDe5mOsFpNaDWMGXT9YJbSlJH8QSEDQE7eY5FIufYUBpL1sfizIe~8kteIDgnKeag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            imgAlt="Mulher fazendo carinho em cachorro"
            category="Voluntário"
            categoryLink="/"
          />
        </S.CardsList>
      </SectionBody>
    </S.Blog>
  );
}
