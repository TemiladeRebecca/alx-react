import { normalize, schema } from 'normalizr';

const data = {
  courses: [
    {
      id: 1,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available"
    }
  ],
};


const courses = new schema.Entity('courses');
const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [courses]);
  return normalizedData.entities.courses;
};

export default coursesNormalizer;
