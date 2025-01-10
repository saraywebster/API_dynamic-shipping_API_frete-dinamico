INSERT INTO dynamic_zone_entity (name, area, multiple)
VALUES (
  'Zona Central',
  ST_GeomFromText('POLYGON((
    -46.6345 -23.5555,
    -46.6320 -23.5505,
    -46.6300 -23.5525,
    -46.6315 -23.5575,
    -46.6345 -23.5555
  ))', 4326),
  10.00
);