import MapItems from "@/app/(site)/cart/mapItems";
import Calculator from "@/app/(site)/cart/calculator";

function CartPage() {
  return (
      <div className="container my-5 min-h-[50vh] ">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="flex bg-white flex-col p-2">
            <MapItems/>
          </div>
          <div className="bg-white p-2">
              <Calculator/>
          </div>
        </div>
      </div>
  )
}

export default CartPage;
