{
  buildNpmPackage,
  pkg-config,
  nodejs,
  vips,
  ...
}:
buildNpmPackage {
  pname = "humaid-site";
  version = "0.1.0";
  src = ./.;
  inherit nodejs;

  buildInputs = [
    vips
  ];

  nativeBuildInputs = [
    pkg-config
  ];

  installPhase = ''
    runHook preInstall
    cp -pr --reflink=auto dist $out/
    runHook postInstall
  '';

  npmDepsHash = "sha256-tdbgeQmtnxugNEbgDYll9Gr3CmyTIXMeey52fJDtmU8=";
}
