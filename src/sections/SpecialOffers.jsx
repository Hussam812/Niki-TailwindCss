import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-content">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt="offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redfines your experience with
          unbeatable deals. Form premier selection to incredible saving, we
          offer unparalleld value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          notiong short of execptional.
        </p>
        <div className="mt-11 flex flex wrap gap-4">
          <Button label={"shop now"} iconUrl={arrowRight} />
          <Button
            label={"Learn more"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
