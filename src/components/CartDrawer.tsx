import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const formatCLP = (n: number) => `$${n.toLocaleString("es-CL")}`;

const CartDrawer = () => {
  const { items, open, setOpen, updateQty, remove, total, clear } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-primary flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Tu carrito
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 && (
            <p className="text-muted-foreground text-center py-12">Aun no has agregado ramos.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 border-b border-border pb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1">
                <h4 className="font-display text-primary">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{formatCLP(item.price)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-sm">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted">
                    <Plus className="w-3 h-3" />
                  </button>
                  <button onClick={() => remove(item.id)} className="ml-auto text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <div className="flex justify-between font-display text-lg">
            <span>Total</span>
            <span className="text-gradient">{formatCLP(total)}</span>
          </div>
          <Button className="w-full bg-gradient-brand" disabled={items.length === 0}>
            Ir al checkout
          </Button>
          {items.length > 0 && (
            <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-foreground">
              Vaciar carrito
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
