export const GET_MESSAGES_BY_ROOM = (roomId) => {
  return `
          SELECT User.user_id, first_name, last_name, time, body, Room.name as room_name FROM Message
            INNER JOIN User ON User.user_id=Message.user_id
            INNER JOIN Room ON Room.room_id=Message.room_id
              WHERE Message.room_id=${roomId}
              ORDER BY time ASC;`
}

export const GET_COMPANION = (roomId, userId) => {
  return  `
  SELECT User.user_id, first_name, last_name, image FROM room_participants
	INNER JOIN User ON User.user_id=room_participants.user_id
    WHERE room_id=${roomId} AND room_participants.user_id <> ${userId};
  `
}

export const MATH_MESSAGE = 
  `Привет. Это математический бот. Напиши мне задачу!
  <br/>
  <br/>
  1. Даны четыре пары чисел. Получить с использованием функции пользователя наибольший общий делитель для каждой пары.
  <br/>
  2. Составить пpогpамму для pасчета значений катета тpеугольника, опpеделив функцию, выполняющую этот pасчет. Гипотенуза и второй катет передаются в качестве параметров.
  <br/>
  3. Даны числа S, T. Получить с использованием функции пользователя Y(T,S)=G(12,S)+G(T,S)-G(2S-1,S*T), где G(A,B)=(2*A+B*B)/(A*B*2+B*5).
  <br/>
  4. Вычислить количество простых чисел, не превосходящих заданного N.Описать функцию логического типа, возвращающую значение true, если b число простое и false в противном случае.
  <br/>
  5. Даны числа S, T. Получить с использованием функции пользователя G(12,S)+G(T, S)-G(2S-1, S*T) где G(A, B) = (2*A+B*B)/(A*B*2+B*5).`


