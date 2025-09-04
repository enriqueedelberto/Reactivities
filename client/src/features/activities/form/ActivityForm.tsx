import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useActivities } from "../../../lib/hooks/useActivities"; 
import { useParams } from "react-router";
import { useForm, type FieldValues } from "react-hook-form";
import { activitySchema, type ActivitySchema } from "../../../lib/schemas/activitySchemas";
import { zodResolver } from "@hookform/resolvers/zod";

function ActivityForm() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<ActivitySchema>({
    mode: 'onTouched',
    resolver: zodResolver(activitySchema)
  });
  const {id} = useParams();
  const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id); 

  useEffect(() => {
    if (activity) {
      reset(activity);
    }
  }, [activity, reset]);

  const onSubmit =  (data: ActivitySchema ) => { 
     console.log(data);
  };

  if(isLoadingActivity) {
    return <Typography> Loading...</Typography>
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
       { !id ? 'Create': 'Edit' } Activity
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField 
          {...register("title")} 
          label="Title"
          defaultValue={activity?.title}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          {...register("description")}
          label="Description"
          defaultValue={activity?.description}
          multiline
          rows={3}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          {...register("category")}
          label="Category"
          defaultValue={activity?.category}
          error={!!errors.category}
          helperText={errors.category?.message}
        />
        <TextField
          {...register("date")}
          name="date"
          label="Date"
          type="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0]
          }
          error={!!errors.date}
          helperText={errors.date?.message}
        />
        <TextField {...register("city")} 
                    label="City" 
                    defaultValue={activity?.city}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                    />
        <TextField {...register("venue")} 
                    label="Venue" 
                    defaultValue={activity?.venue}
                    error={!!errors.venue}
                    helperText={errors.venue?.message}
                    />

        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            color="success"
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default ActivityForm;
