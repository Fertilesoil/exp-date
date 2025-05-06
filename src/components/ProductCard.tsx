import React from 'react'
import { Cell } from '../pages/CategoryDisplay';

type Product = {
  id: number;
  name: string;
  expDate: string[]; // formato dd/mm/yyyy
  category: string;
};

type ProductCardProps = {
  product: Product;
  onUpdate: (id: number, newDates: string[]) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onUpdate }) => {
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);
  const [newDate, setNewDate] = React.useState('');
  const [dates, setDates] = React.useState(product.expDate);
  // const [products, setProducts] = React.useState<Product[]>(initialData);

  const handleDateChange = (index: number, value: string) => {
    const updated = [...dates];
    updated[index] = value;
    setDates(updated);
  };

  const handleDelete = (index: number) => {
    const updated = dates.filter((_, i) => i !== index);
    setDates(updated);
    onUpdate(product.id, updated);
  };

  const handleSave = (index: number) => {
    setEditingIndex(null);
    onUpdate(product.id, dates);
  };

  const handleAdd = () => {
    if (!newDate) return;
    const updated = [...dates, newDate];
    setDates(updated);
    onUpdate(product.id, updated);
    setNewDate('');
  };

  return (
    <Cell>
      <div>{product.name}</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {dates.map((date, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {editingIndex === i ? (
              <>
                <input
                  type="text"
                  value={dates[i]}
                  onChange={(e) => handleDateChange(i, e.target.value)}
                />
                <button onClick={() => handleSave(i)}>Salvar</button>
              </>
            ) : (
              <>
                <span>{date}</span>
                <button onClick={() => setEditingIndex(i)}>✏️</button>
                <button onClick={() => handleDelete(i)}>❌</button>
              </>
            )}
          </div>
        ))}
        <div style={{ marginTop: '0.5rem' }}>
          <input
            type="text"
            placeholder="Nova data"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button onClick={handleAdd}>Adicionar</button>
        </div>
      </div>
    </Cell>
  );
};

export default ProductCard