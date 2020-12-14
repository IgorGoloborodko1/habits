import io from 'socket.io-client';

const socket = io('http://localhost:9000');

socket.on('message', (data: any) => {
  socket.emit('task-status', { taskStatus: 'Completed' });
});
