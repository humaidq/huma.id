{
  description = "A basic flake with a shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in rec {
      devShells.default = pkgs.mkShell {
        packages = [pkgs.hugo];
      };

      packages.site = pkgs.stdenv.mkDerivation {
        name = "humaid-site";
        src = ./.;
        buildInputs = [
          pkgs.hugo
        ];

        buildPhase = ''
          ${pkgs.hugo}/bin/hugo
        '';

        installPhase = ''
          cp -r public $out
        '';
      };

      defaultPackage = packages.site;
    });
}
