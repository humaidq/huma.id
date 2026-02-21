{ inputs, ... }:
{
  imports = [ inputs.git-hooks-nix.flakeModule ];
  perSystem =
    {
      pkgs,
      self',
      lib,
      ...
    }:
    {
      checks = {
        reuse = pkgs.runCommandLocal "reuse-lint" { buildInputs = [ pkgs.reuse ]; } ''
          cd ${../.}
          reuse lint
          touch $out
        '';
      }
      // (lib.mapAttrs' (n: lib.nameValuePair "package-${n}") self'.packages);

      pre-commit = {
        settings = {
          hooks = {
            #treefmt = {
            #  enable = true;
            #  package = config.treefmt.build.wrapper;
            #};
          };
        };

      };
    };
}
