///Users/takuya/Documents/nudgeone_dep/my-app/components/ReservationForm.tsx
'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export default function ReservationForm() {
  const [date, setDate] = useState<Date>()
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここに予約処理のロジックを追加
    console.log('Reservation submitted:', { date, guests, rooms })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#7A91B4]">ご宿泊予約</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="check-in">チェックイン日</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="check-in"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP', { locale: ja }) : <span>日付を選択</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="guests">宿泊人数</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="rooms">部屋数</Label>
          <Input
            id="rooms"
            type="number"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value))}
          />
        </div>
      </div>

      <Button type="submit" className="w-full mt-6 bg-[#7A91B4] hover:bg-[#6A81A4]">
        予約する
      </Button>
    </form>
  )
}

