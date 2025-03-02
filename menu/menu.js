import { useState } from 'react';
import { Card, CardContent, Button } from '@/components/ui';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="menu-container">
      <Button onClick={handleOpen} className="menu-button">Меню</Button>
      {isOpen && (
        <Card className="menu-popup">
          <CardContent>
            <Button className="menu-item">Настройки</Button>
            <Button className="menu-item">О нас</Button>
            <Button className="menu-item">Выход</Button>
            <Button onClick={handleClose} className="menu-item">Закрыть</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

