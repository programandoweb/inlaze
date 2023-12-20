// components/MessageForm.js
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Paper, TextField, Typography } from '@mui/material';

const MessageForm = ({ onSendMessage }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);

    // Simula una solicitud a la API para enviar el mensaje
    try {
      // Aquí deberías realizar la lógica de envío del mensaje a tu API
      // await api.sendMessage(data);
      // Luego, puedes ejecutar la función onSendMessage si es necesario
      onSendMessage(data.message);

      // Limpiar el formulario después de un envío exitoso
      reset();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          ¿Qué piensas hoy?
        </Typography>
        <TextField
          {...register('message', { required: 'Este campo es requerido' })}
          label="Escribe un mensaje"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          disabled={isSubmitting}
          error={!!register('message').error}
          helperText={register('message').error?.message}
        />
        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
          Publicar
        </Button>
      </form>
    </Paper>
  );
};

export default MessageForm;
