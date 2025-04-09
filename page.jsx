import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Овчинников Андрей Николаевич</h1>
        <p className="text-lg text-gray-600">Дизайнер инфографики для маркетплейсов</p>
        <Button asChild>
          <a href="#contacts">Связаться</a>
        </Button>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">О себе</h2>
        <p>
          Меня зовут Овчинников Андрей Николаевич. Я дизайнер, специализирующийся на инфографике для маркетплейсов.
          Уже год я помогаю продавцам на платформах <strong>Wildberries</strong>, <strong>Ozon</strong> и <strong>Яндекс Маркет</strong>
          оформлять свои товары так, чтобы они выделялись среди конкурентов и привлекали внимание покупателей.
        </p>
        <p>
          Создаю информативные и стильные карточки товаров, которые работают на продажи. Работаю быстро и внимательно,
          всегда иду навстречу клиенту — правки бесплатные, а сроки реальные: от 1 до 3 дней.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">💼 Услуги и цены</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>1 карточка — <strong>500 ₽</strong></li>
          <li>Пакет из 5 карточек — <strong>2 000 ₽</strong></li>
          <li>Пакет из 10 карточек — <strong>4 000 ₽</strong></li>
        </ul>
        <p>Бесплатные правки включены. Срок выполнения — от 1 до 3 дней.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Портфолио</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-2">
              <Image src="/photo1.jpg" alt="Работа 1" width={600} height={800} className="rounded-xl" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-2">
              <Image src="/photo2.jpg" alt="Работа 2" width={600} height={800} className="rounded-xl" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-2">
              <Image src="/photo3.jpg" alt="Работа 3" width={600} height={800} className="rounded-xl" />
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="contacts" className="space-y-4">
        <h2 className="text-2xl font-semibold">Контактная информация</h2>
        <ul className="space-y-1">
          <li>Telegram: <a href="https://t.me/raevsky_f" className="text-blue-600 underline">@raevsky_f</a></li>
          <li>Email: <a href="mailto:ao_rnd@mail.ru" className="text-blue-600 underline">ao_rnd@mail.ru</a></li>
          <li>Телефон: <a href="tel:+79281002392" className="text-blue-600 underline">+7 (928) 100-23-92</a></li>
        </ul>
      </section>
    </div>
  );
}
