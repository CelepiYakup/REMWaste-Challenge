import { useState, useEffect } from 'react';
import type { Skip } from '../types';
import { fetchSkips } from '../service/skipService';

export const useSkips = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const data = await fetchSkips();
        setSkips(data);
      } catch (err) {
        setError('Failed to load skip options');
        console.error('Error loading skips:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  return { skips, loading, error };
};