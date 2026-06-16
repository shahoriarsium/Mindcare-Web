const CONSULTANTS = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'Psychiatrist — Depression Specialist',
    specialty: 'Depression',
    price: 120,
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    bio: 'Dr. Sarah Chen has over 15 years of experience helping patients navigate depression, from mild seasonal changes to major depressive episodes. She combines evidence-based medication management with compassionate talk therapy approaches.',
    qualifications: ['MD, Harvard Medical School', 'Board Certified Psychiatrist', '15+ years clinical experience'],
    approach: 'Dr. Chen uses a holistic approach integrating CBT, mindfulness, and personalized treatment plans tailored to each patient\'s lifestyle and goals.',
    availability: ['Mon 9:00 AM', 'Wed 2:00 PM', 'Fri 10:00 AM', 'Sat 11:00 AM']
  },
  {
    id: 'dr-michael-rivera',
    name: 'Dr. Michael Rivera',
    title: 'Psychiatrist — Anxiety Specialist',
    specialty: 'Anxiety',
    price: 110,
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    bio: 'Dr. Michael Rivera specializes in anxiety disorders including generalized anxiety, panic disorder, and social anxiety. His calm, structured sessions help patients build lasting coping strategies.',
    qualifications: ['MD, Johns Hopkins University', 'Fellowship in Anxiety Disorders', 'Published researcher in CBT'],
    approach: 'Dr. Rivera focuses on exposure therapy, breathing techniques, and cognitive restructuring to help patients regain control over anxious thoughts and physical symptoms.',
    availability: ['Tue 11:00 AM', 'Thu 3:00 PM', 'Fri 9:00 AM', 'Sat 2:00 PM']
  },
  {
    id: 'dr-emily-watson',
    name: 'Dr. Emily Watson',
    title: 'Psychiatrist — Sleep & Insomnia Specialist',
    specialty: 'Insomnia',
    price: 100,
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    bio: 'Dr. Emily Watson is dedicated to helping patients overcome insomnia and sleep-related anxiety. She addresses both the psychological and behavioral roots of poor sleep.',
    qualifications: ['MD, Stanford University', 'Certified Sleep Medicine Specialist', '10+ years in sleep psychiatry'],
    approach: 'Dr. Watson uses CBT-I (Cognitive Behavioral Therapy for Insomnia), sleep hygiene coaching, and stress reduction techniques for sustainable rest.',
    availability: ['Mon 4:00 PM', 'Wed 10:00 AM', 'Thu 1:00 PM', 'Sun 10:00 AM']
  }
];

function getConsultantById(id) {
  return CONSULTANTS.find(c => c.id === id);
}
